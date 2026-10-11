<?php
/**
 * Era Dijital — Growth Lead & Dijital Röntgen API
 */
error_reporting(0);
header('Content-Type: application/json; charset=utf-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '*';
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Geçersiz veri formatı']);
    exit;
}

$website = trim($data['website'] ?? '');
$fullName = trim($data['fullName'] ?? '');
$phone = trim($data['phone'] ?? '');
$email = trim($data['email'] ?? '');
$companyName = trim($data['companyName'] ?? '');
$goal = trim($data['goal'] ?? '');
$businessType = trim($data['businessType'] ?? '');
$budgetRange = trim($data['budgetRange'] ?? '');
$services = is_array($data['services'] ?? null) ? implode(', ', $data['services']) : ($data['services'] ?? '');

if (empty($website) || empty($fullName) || empty($phone)) {
    http_response_code(422);
    echo json_encode(['error' => 'Web sitesi, ad soyad ve telefon alanları zorunludur.']);
    exit;
}

$lead = [
    'id' => uniqid('lead_'),
    'created_at' => date('c'),
    'website' => $website,
    'full_name' => $fullName,
    'phone' => $phone,
    'email' => $email,
    'company_name' => $companyName,
    'goal' => $goal,
    'business_type' => $businessType,
    'budget_range' => $budgetRange,
    'services' => $services,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
    'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? ''
];

// 1. Veri Klasörüne Kaydet
$dataDir = dirname(dirname(__DIR__)) . '/panel/data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}
$dataFile = $dataDir . '/growth_leads.json';
$existingLeads = [];
if (file_exists($dataFile)) {
    $content = @file_get_contents($dataFile);
    $existingLeads = json_decode($content, true) ?: [];
}
array_unshift($existingLeads, $lead);
@file_put_contents($dataFile, json_encode($existingLeads, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// 2. E-posta Bildirimi Gönder
$to = 'eradijitalinfo@gmail.com';
$subject = "[DİJİTAL RÖNTGEN TALEBİ] " . ($companyName ?: $website) . " (" . ($budgetRange ?: 'Bütçe Belirtilmedi') . ")";

$body = "YENİ BÜYÜME VE DİJİTAL RÖNTGEN ANALİZİ TALEBİ\n";
$body .= "================================================\n\n";
$body .= "Web Sitesi: " . $website . "\n";
$body .= "Şirket Adı: " . $companyName . "\n";
$body .= "Yetkili: " . $fullName . "\n";
$body .= "Telefon: " . $phone . "\n";
$body .= "E-posta: " . $email . "\n";
$body .= "Büyüme Hedefi: " . $goal . "\n";
$body .= "İş Modeli: " . $businessType . "\n";
$body .= "Bütçe Aralığı: " . $budgetRange . "\n";
$body .= "İhtiyaç Duyulan Araçlar: " . $services . "\n\n";
$body .= "Tarih: " . date('d.m.Y H:i') . "\n";
$body .= "IP Adresi: " . ($lead['ip'] ?? '') . "\n";

$headers = "From: Era Dijital Web <noreply@eradijital.com>\r\n";
$headers .= "Reply-To: " . ($email ?: 'noreply@eradijital.com') . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

@mail($to, $subject, $body, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Talebiniz başarıyla alındı. 24 saat içinde büyüme yol haritanız hazırlanacak.',
    'lead_id' => $lead['id']
]);
exit;