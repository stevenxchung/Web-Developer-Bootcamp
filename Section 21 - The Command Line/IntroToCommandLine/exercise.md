## Command Line Basics Exercise

* Make a new folder named "Animals"
mkdir Animals

* Inside of "Animals" add 2 directories: "AwesomeAnimals" and "SketchyAnimals"
mkdir Animals/AwesomeAnimals Animals/AwesomeAnimals 

* Inside of "AwesomeAnimals" add the following files: "Capybara.js", "ArcticFox.html", and "TreeFrog.txt"
touch Animals/AwesomeAnimals/Capybara.js Animals/AwesomeAnimals/ArcticFox.html Animals/AwesomeAnimals/TreeFrog.txt 

* Inside of "SketchyAnimals" add the following files: "BrownRecluse.html" and "BulletAnt.js"
touch Animals/SketchyAnimals/BrownRecluse.html Animals/SketchyAnimals/BulletAnt.js

* Also inside of "SketchyAnimals" create a "Snakes" directory. Snakes are extra sketchy.
mkdir Animals/SketchyAnimals/Snakes

* Inside the "Snakes" directory create the following files: "Cobra.css" and "ReticulatedPython.py"
touch Animals/SketchyAnimals/Snakes/Cobra.css Animals/SketchyAnimals/Snakes/ReticulatedPython.py 

* You have a change of heart and decide that Bullet Ants are no longer sketchy. remove the "BulletAnt.js" file.
rm Animals/SketchyAnimals/BulletAnt.js 

* All animal life goes extinct. Delete the entire "Animals" directory
rm -rf Animals/

** BONUS: See if you can do this without ever changing directories (without using cd)**