<html>
    <head>
        <meta charset="utf-8">
        <title>Welcome to PHP</title>
    </head>

    <body>
        <h1>
            <?php
                $name = $_GET['name'] ? $_GET['name'] : 'World';
                $age = is_numeric($_GET['age']) ? $_GET['age'] : 0;
                
                echo 'Hello ' . ucfirst(htmlspecialchars($name)) . '!';
                echo '<br>'; // We want a new line
                echo $age > 0 && $age < 150 ? "You are $age years old." : '';
            ?>
        </h1>
    </body>
</html>