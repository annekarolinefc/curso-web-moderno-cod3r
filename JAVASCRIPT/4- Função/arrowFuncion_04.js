let compareComThis = function(param) {
    console.log(this === param)
}
compareComThis("Param")
compareComThis("param")
compareComThis(global)

const obj = {}
compareComThis = compareComThis.bind(obj)
compareComThis(global)
compareComThis(obj)

let comparecomThisArrow = param => console.log(this === param)
comparecomThisArrow(global)