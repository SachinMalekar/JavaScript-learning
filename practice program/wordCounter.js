    function wordCount(val){
        var wom = val.match(/\s+/g);
        return {
            characterNoSpaces : val.replace(/\s+/g,'').length,
            characters : val.length,
            words : wom ? wom.length : 0,
            lines : val.split(/\r*\n/).length
        };
    }

   console.log( wordCount('SomeMultiLinetext').words)
   console.log( wordCount('SomeMultiLinetext').characters)
   console.log( wordCount('SomeMultiLinetext').characterNoSpaces)
   console.log( wordCount('SomeMultiLinetext').lines)

    var str = "    This is Trim  ";
    console.log(str.trimStart());
    console.log(str.trimEnd())
    console.log(str.trim())
