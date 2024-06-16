const menuItems = document.querySelectorAll('.circle__item'),
	length = menuItems.length,
	arc = 2 * Math.PI * (1 / length),
	radius = 35;



menuItems.forEach((element, i) => {
	const andgle = i * arc + 1.98,
		x = radius * Math.cos(andgle),
		y = radius * Math.sin(andgle);


		element.style.left = `${37 + x}%`;
		element.style.top = `${37 + y}%`
});