<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servidor POST PHP</title>
</head>
<body>
<h2>Dados Recebidos pelo servidor</h2>
<p>Nome: <?php echo $_POST['nome'] ?> </p>
<p>Sobrenome: <?php echo $_POST['sobrenome'] ?> </p>
<p>Email: <?php echo $_POST['email'] ?> </p>
<p>Preferencia de contato: <?php echo $_POST['preferencia_contato'] ?> </p>
<p>Desenvolvedor: <?php echo $_POST['dev'] ?> </p>
<p>Área de texto: <?php echo $_POST['textarea'] ?> </p>
</body>
</html>