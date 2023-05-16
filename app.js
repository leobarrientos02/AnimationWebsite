const body = document.querySelector('body')
const sliderInput = document.querySelector('#slider-input')
const allBoxes = document.querySelectorAll('.box')
const allPills = document.querySelectorAll('.pill')
const allHiddenPills = document.querySelectorAll('.hidden-pill')
const allArrows = document.querySelectorAll('.arrow')
const expandPill = document.querySelector('#expand')
const xLetterPath = document.querySelector('#x-letter')
const xLetterSVG = document.querySelector('#x-letter-svg')
const xBox = document.querySelector('.x-box')
const socialFan = document.querySelector('.social-fan')
const reversePill = document.querySelector('#reverse')
const boxContainer = document.querySelector('.box-container')
const iconPath = document.querySelector('#icon')
const hiddenBox = document.querySelector('.hidden-box')
const textBox = document.querySelector('.hidden-box .text-box')

const colorPalettes = [
    [
        {
            altStroke: '#1a2f38',
            fill: '#264653'
        },
        {
            altStroke: '#1b4d4c',
            fill: '#287271'
        },
        {
            altStroke: '#1b665d',
            fill: '#2a9d8f'
        },
        {
            altStroke: '#6b8a60',
            fill: '#8ab17d'
        },
        {
            altStroke: '#898a54',
            fill: '#babb74'
        },
        {
            altStroke: '#ba9d56',
            fill: '#e9c46a'
        },
        {
            altStroke: '#c2804c',
            fill: '#f4a261'
        },
        {
            altStroke: '#b5573f',
            fill: '#e76f51'
        },
        {
            altStroke: '#9e789e',
            fill: '#ba8fba'
        },
        {
            altStroke: '#42466e',
            fill: '#595F94'
        },
        {
            altStroke: '#661c0a',
            fill: '#F3A8BE'
        },
        {
            altStroke: '#912b11',
            fill: '#b43718'
        }
    ],
    [
        {
            altStroke: '#2A415B',
            fill: '#355070'
        },
        {
            altStroke: '#3A3D53',
            fill: '#515575'
        },
        {
            altStroke: '',
            fill: '#6d597a'
        },
        {
            altStroke: '#4B3D54',
            fill: '#915f78'
        },
        {
            altStroke: '#965361',
            fill: '#b56576'
        },
        {
            altStroke: '',
            fill: '#b56576'
        },
        {
            altStroke: '#965462',
            fill: '#cd6873'
        },
        {
            altStroke: '#C1595D',
            fill: '#e56b6f'
        },
        {
            altStroke: '#BD7166',
            fill: '#e88c7d'
        },
        {
            altStroke: '',
            fill: '#eaac8b'
        },
        {
            altStroke: '#C48E71',
            fill: '#FFC5BC'
        },
        {
            altStroke: '#BF6A6D',
            fill: '#E48184'
        }
    ],
    [
        {
            altStroke: '#24052F',
            fill: '#540d6e'
        },
        {
            altStroke: '#621740',
            fill: '#a1286a'
        },
        {
            altStroke: '#C23453',
            fill: '#ee4266'
        },
        {
            altStroke: '#CB6837',
            fill: '#f78a53'
        },
        {
            altStroke: '#CC6938',
            fill: '#fbae49'
        },
        {
            altStroke: '#DAAF22',
            fill: '#ffd23f'
        },
        {
            altStroke: '#87B85E',
            fill: '#9dd076'
        },
        {
            altStroke: '#2FA78B',
            fill: '#3bceac'
        },
        {
            altStroke: '#1A8C66',
            fill: '#25be8b'
        },
        {
            altStroke: '#24052F',
            fill: '#540d6e'
        },
        {
            altStroke: '#09854F',
            fill: '#0ead69'
        },
        {
            altStroke: '#621740',
            fill: '#a1286a'
        }
    ]
]
let paletteIndex = 0
const xLetterIndex = 11
const socialFanIndex = 1
const rotateIconIndex = 3
// Start State
xLetterSVG.style.fill = colorPalettes[paletteIndex][xLetterIndex].fill
allPills.forEach((pill, index) =>
    pill.style.backgroundColor = colorPalettes[paletteIndex][index].fill
)
allHiddenPills.forEach((hiddenPill, index) =>
    hiddenPill.style.backgroundColor = colorPalettes[paletteIndex][socialFanIndex].fill
)

const expand = () => {
    if (hiddenBox.clientWidth !== 0) {
        textBox.classList.add('hidden')
        setTimeout(() => hiddenBox.style.width = '0px', 200)
    } else {
        hiddenBox.style.width = '1700px'
        setTimeout(() => textBox.classList.remove('hidden'), 500)
    }
}
expandPill.addEventListener('click', expand)

const reverse = () => {
    if (boxContainer.style.flexWrap === 'wrap') {
        boxContainer.style.flexWrap = 'wrap-reverse'
    } else {
        boxContainer.style.flexWrap = 'wrap'
    }
}
reversePill.addEventListener('click', reverse)

const addTheme = (
    bodyBackgroundColor,
    strokeWidth,
    svgFill,
    opacity,
    lineColor,
    borderRadius,
    boxBackgroundColor,
    pillBackgroundColor
) => {
    body.style.backgroundColor = bodyBackgroundColor
    xLetterPath.style.strokeWidth = strokeWidth
    xLetterSVG.style.fill = svgFill || colorPalettes[paletteIndex][xLetterIndex].fill
    xLetterSVG.style.opacity = opacity
    xBox.style.backgroundColor = bodyBackgroundColor || colorPalettes[paletteIndex][xLetterIndex].fill
    iconPath.style.stroke = lineColor || colorPalettes[paletteIndex][rotateIconIndex].altStroke
    iconPath.style.strokeWidth = strokeWidth

    allBoxes.forEach((box, index) =>
        box.style.backgroundColor = boxBackgroundColor || colorPalettes[paletteIndex][index].fill
    )

    allPills.forEach((pill, index) => {
        pill.style.opacity = opacity
        pill.style.backgroundColor = pillBackgroundColor || colorPalettes[paletteIndex][index].fill
        pill.style.borderWidth = strokeWidth
        pill.style.borderColor = lineColor || colorPalettes[paletteIndex][index].altStroke
        pill.style.borderBlockStyle = 'solid'
        pill.style.borderRadius = borderRadius
    })

    allHiddenPills.forEach((hiddenPill => {
        hiddenPill.style.opacity = opacity
        hiddenPill.style.borderWidth = strokeWidth
        hiddenPill.style.borderColor = lineColor || colorPalettes[paletteIndex][socialFanIndex].altStroke
        hiddenPill.style.borderRadius = borderRadius
    }))

    allArrows.forEach((arrow => {
        arrow.style.borderBlockStyle = 'solid'
        arrow.style.borderColor = lineColor
        arrow.style.borderWidth = '0 ' + strokeWidth + ' ' + strokeWidth + ' 0'
        arrow.style.opacity = opacity
    }))
}

const moveSlider = () => {
    const sliderInput = document.querySelector('#slider-input')
    const sliderValue = sliderInput.value

    if (sliderValue == 0) {
        addTheme('white', '4px', null, 1, 'rgb(38, 38, 38)', '100px', 'white', null)
    }
    if (sliderValue > 1 && sliderValue <= 3) {
        addTheme('white', '2px', 'white', 0.5, null, '75px', null, 'white')
    }
    if (sliderValue >= 4 && sliderValue <= 6) {
        addTheme('white', '1px', 'white', 0.5, null, '90px', null, 'white')
    }
    if (sliderValue >= 7 && sliderValue <= 9) {
        addTheme('white', '2px', 'white', 0.5, 'rgb(38, 38, 38)', '50px', null, 'white')
    }
    if (sliderValue == 10) {
        addTheme('rgb(38, 38, 38)', '12px', 'white', 1, 'black', 0, 'transparent', 'white')
    }
}

sliderInput.addEventListener('input', moveSlider)