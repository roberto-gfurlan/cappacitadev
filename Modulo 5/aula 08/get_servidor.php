<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servidor GET PHP</title>
</head>
<body>
<h2>Dados Recebidos pelo servidor</h2>
<p>Nome: <?php echo $_GET['nome'] ?> </p>
<p>Sobrenome: <?php echo $_GET['sobrenome'] ?> </p>
<p>Email: <?php echo $_GET['email'] ?> </p>
<p>Preferencia de contato: <?php echo $_GET['preferencia_contato'] ?> </p>
<p>Desenvolvedor: <?php echo $_GET['dev'] ?> </p>
<p>Área de texto: <?php echo $_GET['textarea'] ?> </p>
</body>
</html>