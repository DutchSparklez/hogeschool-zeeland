<?php
function ageCheck($age) {
    if ($age > 21 && $age < 120) {
        echo 'You can go into the club';
    } else {
        echo 'You cannot go into the club';
    }
}

if (is_numeric($_GET['age'])) {
    ageCheck($_GET['age']);
} else {
    echo 'Please enter a number for age';
}