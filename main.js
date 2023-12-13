import pollutionScale from './pollutionScaleData';
const API_KEY = import.meta.env.VITE_API_KEY;

async function getPollutionData() {
	try {
		addLoaderAnimation();
		const response = await fetch(
			`https://api.airvisual.com/v2/nearest_city?key=${API_KEY}`
		);
		if (response.ok) {
			removeLoaderAnimation();
			const data = await response.json();
			const aqi = data.data.current.pollution.aqius;
			const sortedData = {
				city: data.data.city,
				aqi,
				...pollutionScale.find(
					(obj) => aqi >= obj.scale[0] && aqi <= obj.scale[1]
				),
			};
			// console.log(sortedData.city, sortedData.aqi);
			populateUI(sortedData);
		} else {
			throw new Error(
				'Error fetching' +
					' ' +
					response.status +
					' ' +
					response.statusText
			);
		}
	} catch (error) {
		setTimeout(() => {
			removeLoaderAnimation();
			displayError(error);
		}, 2000);
	}
}

getPollutionData();
const city$ = $('#city');
const emojiImg$ = $('.emojiImg');
const info$ = $('.infoCity');
const pollutionInfo$ = $('#PollutionInfo');
const airIndex$ = $('#airIndex');
const locationPointer = document.querySelector('#location-pointer');
const pollutionScaleInfo = document.querySelector('#pollutionScaleInfo');

function populateUI(data) {
	info$.text('here is ' + data.city + ' situation ');
	city$.text(data.city);
	airIndex$.text(data.aqi);
	emojiImg$.attr('src', `/ressources/${data.src}.svg`);
	emojiImg$.attr('alt', data.src + ' emoji');
	$('body').css('background', data.background);
	pollutionInfo$.text(data.quality);
	pointerPlacement(data.aqi);
}

function displayError(text) {
	info$.text(text);
	emojiImg$.attr('src', `/ressources/browser.svg`);
	emojiImg$.attr('alt', 'browser emoji');
}

function pointerPlacement(AQIValue) {
	const parentWidth = locationPointer.parentElement.scrollWidth;
	locationPointer.style.transform = `translateX(${
		(AQIValue / 500) * parentWidth
	}px) rotate(180deg)`;
}
function removeLoaderAnimation() {
	$('.loader').removeClass('active');
	$('.app-container').css('visibility', 'visible');
}
function addLoaderAnimation() {
	$('.loader').addClass('active');
	$('.app-container').css('visibility', 'hidden');
}
