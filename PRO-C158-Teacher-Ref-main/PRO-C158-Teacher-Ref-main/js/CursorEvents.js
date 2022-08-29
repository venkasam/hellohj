AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.clickevent();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    
  },
  clickevent:function(){
   this.el.addEventListener("click",evt=>{
    console.log(evt)
    const placeContainer=document.querySelector("#places-container")
    console.log(placeContainer)
    const {state} =placeContainer.getAttribute("tour")
    console.log(this.data.state)
    if(state==="place"){
      const id=this.el.getAttribute("id")
      const placesid=[
        "taj-mahal","budapest","new-york-city","eiffel-tower"
      ]
      console.log(placesid)
        console.log(id)
      if(placesid.includes(id)){
        console.log(placesid)
        console.log(id)
        placeContainer.setAttribute("tour",{
          state:"view",
          selectedplace:id,
        })
      }
    }

   })


  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },
});
