require("svg-url-loader!../../public/data/pokemonData");

export const style_Headers = {
    _p: { marginTop: "-20px", marginBottom: "20px" },
    //_pokeSvg: { width: "8%", height: "auto", marginRight: "5px", background: url("../../public/data/pokemonData") }
  };
  
  export const style_Container = {
    _container_inner: { width: "350px" },
    _container_outer_short: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
      height: "80vh"
    },
    _container_outer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "200px",
      height: "80vh"
    }
  };
  
  export const style_ShareButtons = {
    _facebook_btn: { background: "#3b5998", borderRadius: "10px" },
    _twitter_btn: {
      background: "#00aced",
      marginTop: "5px",
      borderRadius: "10px"
    },
    _share_btn_div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingTop: "20px"
    }
  };
  