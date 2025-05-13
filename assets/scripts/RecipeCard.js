// RecipeCard.js

class RecipeCard extends HTMLElement {
	constructor() {
		super();

		// A1 - Shadow DOM
		this.attachShadow({ mode: 'open' });

		// A2 - <article>
		const article = document.createElement('article');

		// A3 - <style>
		const style = document.createElement('style');

		// A4 - Insert styles from cardTemplate.html
		style.textContent = `
			* {
				font-family: sans-serif;
				margin: 0;
				padding: 0;
			}
			article {
				align-items: center;
				border: 1px solid rgb(223, 225, 229);
				border-radius: 8px;
				display: grid;
				grid-template-rows: 118px 56px 14px 18px 15px 36px;
				height: auto;
				row-gap: 5px;
				padding: 0 16px 16px 16px;
				width: 178px;
			}
			article > img {
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
				height: 118px;
				object-fit: cover;
				margin-left: -16px;
				width: calc(100% + 32px);
			}
			p.title {
				font-size: 16px;
				margin-top: 4px;
				margin-bottom: 0;
			}
			p.title a {
				text-decoration: none;
				color: #000;
			}
			p.organization {
				color: black !important;
			}
			div.rating {
				align-items: center;
				column-gap: 5px;
				display: flex;
			}
			div.rating > img {
				height: auto;
				display: inline-block;
				object-fit: scale-down;
				width: 78px;
			}
			time {
				color: #70757A;
				font-size: 12px;
			}
			p.ingredients {
				font-size: 12px;
				height: 32px;
				overflow: hidden;
			}
		`;

		// A5 - Append style and article
		this.shadowRoot.append(style, article);
	}

	set data(data) {
		if (!data) return;

		// A6 - Get <article>
		const article = this.shadowRoot.querySelector('article');

		// ✨ NEW: Prefix for star image path
		const prefix = window.location.pathname.includes("Lab6_Starter") ? "Lab6_Starter/" : "";

		// A7 - Set article.innerHTML
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<p class="title">
				<a href="${data.titleLnk}">${data.titleTxt}</a>
			</p>
			<p class="organization">${data.organization}</p>
			<div class="rating">
				<span>${data.rating}</span>
				<img src="${prefix}assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
				<span>(${data.numRatings})</span>
			</div>
			<time>${data.lengthTime}</time>
			<p class="ingredients">${data.ingredients}</p>
		`;
	}
}

// A8 - Define custom element
customElements.define('recipe-card', RecipeCard);
