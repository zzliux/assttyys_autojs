const none = 0;
const left = 1;
const center = 2;
const right = 3;
/*
desc: [1280,720,
    [
        [right,1124,698,0xd0af86],
        [right,1240,702,0xcead83],
        [right,1191,596,0xa46149],
        [right,1182,586,0xf7e6c3],
        [center,360,699,0x241818],
        [left,32,23,0xdbb48b]
    ]
],
oper: [
    [right, 1280, 720, 1137,542, 1228,632, 2000],
    [left, 1280, 720, 22,19, 52,47, 500],
    [center, 1280, 720, 683,401, 795,442, 500],
]
*/
function create(bounds, colorInfos) {
    try {
        var result = `desc: [\r\n\t${colorInfos.Width}, ${colorInfos.Height},\r\n\t[\r\n`;
        for (var i = 0; i < colorInfos.Count; i++) {
            var colorInfo = colorInfos[i];
            if (colorInfo.IsChecked) {
                var anchor = colorInfo.Anchor == 1 ? "left" : colorInfo.Anchor == 2 ? "center" : colorInfo.Anchor == 3 ? "right" : "none";
                result += `\t\t[${anchor}, ${colorInfo.X}, ${colorInfo.Y}, 0x${toHexString(colorInfo.Color)}],\r\n`;
            }
        }
        result += "\t]\r\n]";
    
        if (bounds && bounds.length) {
            result += `,\r\noper: [`;
            for (var i = 0; i < bounds.length; i++) {
                result += `\r\n\t[center, ${colorInfos.Width}, ${colorInfos.Height}, ${bounds[i].Left}, ${bounds[i].Top}, ${bounds[i].Right}, ${bounds[i].Bottom}, 1000],`;
            }
            result += '\r\n]';
        } else if (bounds) {
            result += `,\r\noper: [`;
            result += `\r\n\t[center, ${colorInfos.Width}, ${colorInfos.Height}, ${bounds.Left}, ${bounds.Top}, ${bounds.Right}, ${bounds.Bottom}, 1000],`;
            result += '\r\n]';
        }
    
        return result;
    } catch(e) {
        return e.stack || e.message;
    }
}

function parse(importStr) {
    var result = new ColorInfos();

    var arr = eval(importStr);
    result.Width = arr[0];
    result.Height = arr[1];

    arr[2].forEach((info) => {
        result.Add(new ColorInfo(result.Count, info[0], info[1], info[2], info[3]));
    });

    return result;
}
