function fillGrid(id, n, dir, ext, links){
	const mygrid = document.getElementById(id);
	mygrid.style.margin = "3rem 0 3rem 0";
	for(let i=0; i<n; i++){
		const mainEl = document.createElement("div");
		mainEl.setAttribute("class", "col-6 col-lg-3 col-md-4 col-sm-6 swipperCol hoverscale");

		const aElement = document.createElement("a");
		if(links[i])
			aElement.setAttribute("href", links[i]);

		const imgEl = document.createElement("img");
		imgEl.setAttribute("class", "img-fluid swipperImg hoverscale");
		imgEl.setAttribute("src", `${dir}/${i+1}.${ext}`);

		aElement.appendChild(imgEl);
		mainEl.appendChild(aElement);
		mygrid.appendChild(mainEl);
	}
}