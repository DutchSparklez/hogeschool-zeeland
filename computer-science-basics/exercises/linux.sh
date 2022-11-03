#!/bin/bash

# Basic Setup
cd ~/
touch Documenten/HelloWorld.txt

# 1: List the contents of the current directory
ls 

# 2: Change directory in your Documents directory
cd Documenten/

# 3: Create a copy of your "HelloWorld.txt" file and name it " HoiWereld.txt"
cp HelloWorld.txt HoiWereld.txt

# 4: Delete the original "HelloWorld.txt"
rm HelloWorld.txt

# 5: Create a new directory named "Homework"
mkdir Homework

# 6: Move "HoiWereld.txt" to your "Homework" directory
mv HoiWereld.txt Homework/

# 7: Output the contents of "HoiWereld.txt" to the terminal
cat Homework/HoiWereld.txt

# 8: Use vim to add your home country to "HoiWereld.txt"
vim Homework/HoiWereld.txt # i -> enter text -> esc -> :wq
