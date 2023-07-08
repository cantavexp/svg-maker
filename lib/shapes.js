

class Shape {
    constructor() {
        this.color = ""
        this.textcolor = ""
        this.textinfo = ""
    }
    setColor(color) {
        this.color = color
    }
    setTextArea(textcolor, textinfo) {
        if (textinfo.length > 3) {
            throw new Error("too many characters")
        
        }
        this.textcolor = textcolor
        this.textinfo = textinfo
    }
}

class Circle extends Shape {
    render() {
        // return `<circle cx="10" cy="10" r="2" fill="${this.color}"/>`
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.textinfo}</text>
      
      </svg>`

    }
    
        
    
}


class Triangle extends Shape {
    render() {
        return `<svg width="400" height="180">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.textinfo}</text>
        </svg>
        `

    }
}


class Square extends Shape {
    render() {
        return `<svg width="400" height="180">
        <rect x="50" y="20" width="150" height="150" fill=${this.color} />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.textinfo}</text>
      </svg>`

    }
}



module.exports = { Shape, Circle, Square, Triangle };
