/*
	Epilogue by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

import countapi from 'countapi-js';

countapi.visits().then((result) => {
    console.log(result.value);
});