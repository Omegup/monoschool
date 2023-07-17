// Potentially falsey strings are not allowed
let str = '';
<App>{str && <Foo />}</App>;

// Potentially falsey numbers are not allowed
let num = 0;
<App>{num && <Foo />}</App>;

// Includes types that may be a string or number
let thisOrThat: Record<any, any> | string | number;
<App>{thisOrThat && <Foo />}</App>;


tessssssssssssssst