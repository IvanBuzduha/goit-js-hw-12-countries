// import "@pnotify/core/dist/PNotify.css";
// import { error } from '@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/BrightTheme.css';

import "@pnotify/core/dist/BrightTheme.css";
const { error } =require ('@pnotify/core');
import '@pnotify/core/dist/PNotify.js';
function showError() {
    error({
        text: 'Too many matches found. Please enter a more specific query!',
        delay: 1000,
        //styling: 'brighttheme',
        sticker: false,
        closer: false,
        icon: false,        
    });
}
function notFound() {
    error({
        text: 'No country has been found. Please enter a more specific query!',
        delay: 1000,
        status: 404,
        sticker: false,
        closer: false,
        icon: false,
    })
}
export { showError, notFound };
