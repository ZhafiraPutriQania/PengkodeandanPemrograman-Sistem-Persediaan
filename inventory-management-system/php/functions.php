<?php
require_once 'db.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data['action'] === 'add') {
        $name = $data['name'];
        $quantity = $data['quantity'];
        $price = $data['price'];

        $stmt = $pdo->prepare("INSERT INTO items (name, quantity, price) VALUES (?, ?, ?)");
        $success = $stmt->execute([$name, $quantity, $price]);

        echo json_encode(['success' => $success]);
    }
}
?>