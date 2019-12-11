var io = require('socket.io')(process.env.PORT || 52300)

console.log('Server has started Bro!');

//Custom class
var Admin = require('./Classes/Admin.js');
var Player = require('./Classes/Player.js');

io.on('connection', function(socket) {


    console.log("Connection Made");
     
    var admin = new Admin();
    var player = new Player();
   
    socket.emit('open');
    
  
    socket.on('LoginAdmin', function(data){
        
        admin.username = data.Username;
        admin.password = data.Password;            
                                
        console.log("Login by Admin: " + admin.username);
    });

    socket.on('LoginPlayer', function(data){
        
        player.username = data.Username;
        player.password = data.Password;    
                
        console.log("Login by Player: " + player.username);                
    });

    socket.on('Lamp', function(data){
                              
        console.log("Status Lamp: " + data.Status);                
        io.emit("Lamp_", data);
    });

    socket.on('NodeLevel', function(data){                
        io.emit("NodeLevel_", data);
    });

    socket.on('Break', function(data){                
        //io.emit("NodeLevel_", data);
        console.log("Status Break: " + data.Status);     
    });

    socket.on('ClutchMode', function(data){                
        io.emit("ClutchMode_", data);
    });
    socket.on('TrainSpeed', function(data){                
        
        io.emit("TrainSpeed_", data);
    });
    socket.on('Deadman', function(data){                
        
        io.emit("Deadman_", data);
    });
    socket.on('DoorSystem', function(data){                
        console.log("Door is Opened: ");
        io.emit("DoorSystem_", data);
    });
    socket.on('TravelPass', function(data){                        
        io.emit("TravelPass_", data);
    });
    socket.on('HornStatus', function(data){                
        // console.log("Door is Opened: ");
        io.emit("HornStatus_", data);
    });
    socket.on('VideoTime', function(data){                
        // console.log("Video Time: " + data.Time);
        io.emit("VideoTime_", data);
    });
    socket.on('ActionLog', function(data){                
        console.log("Action Log: " + data.Name);
        io.emit("ActionLog_", data);
    });



    
    // socket.on('NodeLevel', function (params) {
    //     console.log("THIS ", NodeLevels.getData(params))
    //     io.emit("toOperator", NodeLevels.getData(params))
    // })
    
    
    // socket.on('sendMessage', function(data){
    //     account.id = data.id;
    //     account.username = data.username;
    //     account.message = data.message;

    //     socket.broadcast.emit('sendMessage', account);
    // });

    socket.on('disconnect', function(){
        console.log('Someone has Disconnect from Server!');
        delete admin;        
        socket.broadcast.emit('disconnected', admin);
    })
});