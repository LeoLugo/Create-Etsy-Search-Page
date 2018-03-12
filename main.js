
var stuff = document.querySelector("#stuff")
var elements = data.results.map(function(item) {
	return `
	<a href="${item.url}" target="_blank">
							<div class="contentpic">
								<img src="assets/tech.jpg">
							</div>
							<div class="contenttitle">${item.title}</div>
							<div class="sellerandstars">
								<div class="contentseller">${item.shop_name}</div>
								<div class="contentstars">4stars</div>
							</div>
							<div class="contentprice">$${item.price}</div>
							<div class="contentdiscount">Only 3 left</div>
						</a>
	`
})

elements.forEach(function(el) {
	stuff.innerHTML += el
})
