//appbar components
<AppBar position="static" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",width:"100%"}}>
      <Toolbar>
        <Button color="inherit" onClick={() => history.push("/")} style={{color:"crimson",fontSize:"30px"}}>
        CARZEY <GiLightningHelix  style={{position:"absolute",marginLeft:'150px'}}  /></Button>
          <div className='hug1'>
        <Button color="inherit" onClick={() => history.push("/tesla")}>  TESLA  </Button>
        <Button color="inherit" onClick={() => history.push("/rolls")}> ROLLSROYCE </Button>
        <Button color="inherit" onClick={() => history.push("/bmw")}>  BMW </Button>
        <Button color="inherit" onClick={() => history.push("/benz")}> MERCEDES </Button>
        <Button color="inherit" onClick={() => history.push("/jaguar")}>JAGUAR </Button>
        <Button color="inherit" onClick={() => history.push("/tata")}>  TATA </Button>
        <Button color="inherit" onClick={() => history.push("/hyundai")}> HYUNDAI </Button>
      
        </div>
        <div className='hug'>
        <Button color="inherit" onClick={() => history.push("/about")}><IconButton color="primary" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}  aria-label="add to shopping cart"><InfoIcon style={{fontSize: "25px",color:"crimson"}} /></IconButton></Button>
        <Button color="inherit" onClick={() => history.push("/login")}>LOGIN</Button>
        <IconButton color="primary" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}  aria-label="add to shopping cart">< ManageAccountsIcon style={{color:"crimson"}} /></IconButton>
        <Button color="inherit" onClick={() => history.push("/menu")}>MENU</Button>
        </div>
      </Toolbar>
    </AppBar>