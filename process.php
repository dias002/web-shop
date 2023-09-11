    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Получите данные из формы
            $fullName = $_POST["fullName"];
            $phoneNumber = $_POST["phoneNumber"];
            
            // Адрес, на который будет отправлено письмо
            $to = "dias.sunnatilla@gmail.com";
            
            // Тема письма
            $subject = "Регистрация нового пользователя";
            
            // Сообщение, которое будет отправлено
            $message = "ФИО: " . $fullName . "\n";
            $message .= "Number " . $email . "\n";
            
            // Заголовки для письма
            $headers = "From: " . $email . "\r\n";
            $headers .= "Reply-To: " . $email . "\r\n";
            
            // Отправка письма
            mail($to, $subject, $message, $headers);
            
            // Перенаправление на страницу подтверждения
            header("Location: confirmation.html");
        }
    ?>