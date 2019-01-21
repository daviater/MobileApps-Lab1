//boolean
let b_bool: boolean = true;
console.log("b_bool = " + b_bool);

//number
let i_number: number  = 25;
console.log("i_int = " + i_number);

//string
let s_string: string = "word";
console.log("s_string = " + s_string);

//array
let an_array: number[] = [1, 2, 3];
console.log("an_array = " + an_array);

//tuple
let t_tuple: [string, number];
t_tuple = ["word", 25];
console.log("t_tuple = " + t_tuple[0] + " " + t_tuple[1]);

//enum
enum Colour {Red, Green, Blue};
let c_colour = Colour.Red;
console.log("c_colour = " + c_colour);

//any
let a_any: any = 7;
a_any = "anything";
console.log("a_any = " + a_any);

//void
let v_void: void = undefined;
console.log("v_void = " + v_void);

//null
let u_null: null = null;
console.log("u_null = " + u_null);

