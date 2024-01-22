/** @typedef {import( '../util.js' ).SiteRecord} SiteRecord */


import {
    createDomElement,
    getMessage
} from '../util.js';


/**
 * @typedef {Object} RedirectBadgeOptions
 * @property {boolean} [allMoved=false]
 * @property {boolean} [isGoogleMobile=false]
 */


/**
 * @param {RedirectBadgeOptions} options
 * @return {HTMLElement}
 */
export function constructRedirectBadge( options ) {
    return createDomElement( 'span', {
        text: options.allMoved ? 'redirected' : 'some redirected',
        style: {
            backgroundColor: options.isDarkmode ? '#ffffff' : '#0002',
	    color: 'gray',
            fontSize: '90%',
            opacity: 0.6,
            borderRadius: '4px',
            padding: '1px 6px',
            marginLeft: options.isMobile ? null : '4px'
        }
    } );
}


/**
 * @param {SiteRecord} wikiInfo
 * @return {HTMLElement}
 */
export function constructReplacementMarker( wikiInfo ) {
    return createDomElement( 'span', {
        text: `Result from ${wikiInfo.search.placeholderTitle} hidden by wiki.gg Redirect`,
        style: {
            paddingBottom: '1em',
            display: 'inline-block',
            color: '#5f6368'
        }
    } );
}


/**
 * @param {SiteRecord} wikiInfo
 * @return {HTMLElement}
 */
export function constructDisabledResultControl( wikiInfo ) {
    return createDomElement( 'aside', {
        classes: [ 'ggr-disarmed-control' ],
        style: {
            backgroundImage: `
                linear-gradient( 45deg, #220942 0%, #420a46 100% ),
                linear-gradient( 60deg, transparent 40%, #52145190 100% )
            `,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
        },
        html: [
            createDomElement( 'a', {
                text: 'Read about "$1" on wiki.gg instead'
            } )
        ]
    } );
}
