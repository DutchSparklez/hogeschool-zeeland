<html>
    <head>
        <meta charset="utf-8">
        <title>Welcome to PHP</title>
    </head>

    <body>
        <h1><?= ucfirst($task['title']); ?></h1>
        <ul>
            <li>
                <strong>Due Date:</strong> <?= ucfirst($task['due']); ?>
            </li>
            <li>
                <strong>Person Responsible:</strong> <?= ucfirst($task['assigned_to']); ?>
            </li>
            <li>
                <strong>Status:</strong> <?= $task['completed'] ? 'Complete' : 'Incomplete'; ?>
            </li>
        </ul>
    </body>
</html>