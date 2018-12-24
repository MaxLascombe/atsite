// input side length from width in pixels of column
//

// flat-topped hexagon with a side length of 137 will have a height of 200 (1:1.459)

// stroke width is 10 px and "padding" is 5? px

// given current centerpoint, calculate points for upper right or lower right hexagon

// center: 100,100
// top left:


// returns only the corner
function pointy_hex_corner(center, size, i){
	let angle_deg = 60 * i - 30;
	let angle_rad = Math.PI / 180 * angle_deg;
	return [center.x + size * Math.cos(angle_rad),
		center.y + size * Math.sin(angle_rad)];
}

let center = {}
center["x"] = 100
center["y"] = 100

console.log(pointy_hex_corner(center, 25, 120))


// // counter-clockwise rendering from center left
// 0,100 // center left
// 50,187 // lower left
// 150,187 // lower right
// 200,100 // center right
// 150,13 // top right
// 50,13 // top left
