solution:
	cd solution; npm start; cd ..

starter:
	cd starter; npm start; cd ..

slides:
	pandoc -t beamer docs/SLIDES.md -o docs/SLIDES.pdf
