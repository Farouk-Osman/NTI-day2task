function ChangeFont(fontFamily) {
    document.getElementById("PAR").style.fontFamily = fontFamily;
}

function ChangeAlign(alignment) {
    document.getElementById("PAR").style.textAlign = alignment;
}

function ChangeHeight(lineHeight) {
    document.getElementById("PAR").style.lineHeight = lineHeight;
}

function ChangeLSpace(letterSpacing) {
    document.getElementById("PAR").style.letterSpacing = letterSpacing;
}

function ChangeIndent(textIndent) {
    document.getElementById("PAR").style.textIndent = textIndent;
}

function ChangeTransform(textTransform) {
    document.getElementById("PAR").style.textTransform = textTransform;
}

function ChangeDecorate(textDecoration) {
    document.getElementById("PAR").style.textDecoration = textDecoration;
}

function ChangeBorder(borderStyle) {
    if (borderStyle === 'none') {
        document.getElementById("PAR").style.border = 'none';
    } else {
        document.getElementById("PAR").style.borderStyle = borderStyle;
        // Ensure border width and color are set if not already
        if (!document.getElementById("PAR").style.borderWidth) {
            document.getElementById("PAR").style.borderWidth = '1px';
        }
        if (!document.getElementById("PAR").style.borderColor) {
            document.getElementById("PAR").style.borderColor = 'black';
        }
    }
}

function ChangeBorderColor(borderColor) {
    document.getElementById("PAR").style.borderColor = borderColor;
    // Ensure border style and width are set if not already
    if (!document.getElementById("PAR").style.borderStyle || document.getElementById("PAR").style.borderStyle === 'none') {
        document.getElementById("PAR").style.borderStyle = 'solid';
    }
    if (!document.getElementById("PAR").style.borderWidth) {
        document.getElementById("PAR").style.borderWidth = '1px';
    }
}

