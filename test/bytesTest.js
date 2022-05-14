let boundary = '-----boundaryb366db0c41ab7f1dc7562c3921719203';
let sc = (new java.util.Scanner(new java.io.File(files.cwd() + '/1.txt'), 'ISO-8859-1')).useDelimiter(boundary);
let str = null;
while (str = sc.next()) {
    let r = new java.lang.String(new java.lang.String(str).getBytes('ISO-8859-1'));
    console.log(r);
    console.log('length = ' + r.length());
}