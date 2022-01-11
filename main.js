var last_position_of_x, last_position_of_y;
    var mouseEvent = "empty"; 
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = document.getElementById("colour").value;
    width_of_line = 2;

    width = screen.width;
    new_width = screen.width - 70;
    new_height = screen.height - 300;
   
   if (width < 992)
        {
            document.getElementById("myCanvas").width = new_width;
            document.getElementById("myCanvas").height = new_height;
            document.body.style.overflow = "hidden";
        }
        canvas.addEventListener("touchstart", my_touchstart);
        function my_touchstart(e)
        {
            console.log("my_touchstart");
            last_position_of_x = e.touches[0].clientX - client.offsetLeft;
            last_position_of_y = e.touches[0].clientY - client.offsetTop;
        }
        canvas.addEventListener("touchmove", my_touchmove);
        function my_touchmove(e)
        {   
            console.log("my_touchmove");
    
             current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
             current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    
            ctx.beginPath();
            ctx.strokeStyle = document.getElementById("colour").value;
            ctx.lineWidth = width_of_line;
    
            console.log("Last position of x and y coordinates = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
            ctx.moveTo(last_position_of_x, last_position_of_y);
    
            console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
            ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
            ctx.stroke();
    
            last_position_of_x = current_position_of_touch_x; 
            last_position_of_y = current_position_of_touch_y;
    }
    if (width > 992)
    {
        canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
   current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
   current_postion_of_mouse_y = e.clientY - canvas.offsetTop;
   
   if (mouseEvent == "mouseDown")
   {
       ctx.beginPath();
       ctx.lineWidth = width_of_line;
       ctx.strokeStyle = color;

       console.log("Last Position Of X And Y Coordinates:- ");
       console.log("x=" + last_position_of_x + "y=" + last_position_of_y);
       ctx.moveTo(last_position_of_x,last_position_of_y);

       console.log("Current Position Of X And Y Coordinates");
       console.log("x = "+ current_postion_of_mouse_x + "y = " + current_postion_of_mouse_y);
       
       ctx.lineTo(current_postion_of_mouse_x, current_postion_of_mouse_y);
       ctx.stroke();
   }
    last_position_of_x = current_postion_of_mouse_x;
    last_position_of_y = current_postion_of_mouse_y;
}

    }
    