<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'vendor/autoload.php';

    define('EMAIL_USER', 'emailautenticado@gmail.com');
    define('EMAIL_PASS', 'SENHA-EMAIL-AUTH'); 
    define('FROM_EMAIL', 'emailautenticado@gmail.com'); #QUEM ESTA ENVIANDO 
    define('FROM_NAME', 'GLOBALAD'); #NOME DE QUEM TA ENVIANDO
    $to = "franer.rodrigues@globalad.com.br"; # QUEM VAI RECEBER OS EMAILS
    $assunto = "Contato Saque e Pague"; # ASSUNTO EMAIL


    function send($para ,$subject,$body){
        $mail = new PHPMailer();
        
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        $mail->Host =  gethostbyname('smtp.gmail.com');
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->Username = EMAIL_USER;
        $mail->Password = EMAIL_PASS;

        $mail->CharSet = 'UTF-8';
        $mail->SetFrom(FROM_EMAIL, FROM_NAME);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->IsHTML(true); 
        $mail->AddAddress($para);
            
        
        if(!$mail->Send()) {
            return false;
        } else {
            return true;
        }
    }

    function validaEmail($email){
        $email = trim($email);
        $regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i'; 
        if (preg_match($regex, $email)) {
          return TRUE;
        }
        return FALSE;
    }

    $nome = trim($_POST['nome']);
    $email = trim(strtolower($_POST['email']));
    $cidade = trim($_POST['cidade']);
    $telefone = trim($_POST['telefone']);


    $errors = array();

    if(!validaEmail($email)){
        $errors[] = 'email';
    }
    if(!$telefone){
        $errors[] = 'telefone';
    }
    if(!$nome){
        $errors[] = 'nome';
    }
    if(!$cidade){
        $errors[] = 'cidade';
    }

    if(count($errors)){
        echo json_encode(array('status' => false, 'erros' => $errors));
        die();
    }

    $body = "\nNome: ".$nome."\n <br>";
    $body .= "\nE-mail: ".$email."\n <br>";
    $body .= "\nCidade: ".$cidade."\n <br>";
    $body .= "\nTelefone: ".$telefone."\n <br>";
    if(send($to, $assunto, $body)){
        echo json_encode(array('status' => true));
    }



