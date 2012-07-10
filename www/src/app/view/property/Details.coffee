Ext.define  'FriendlyRent.view.property.details'
  extend:   'Ext.DataView'
  alias:    'widget.property_details'
  requires: [
  ]
  config:
    store:
      itemTpl: Ext.XTemplate.from("property_details", new PropertyHelper.details)
      fields: ['title', 'description', 'smoking', 'pets']
      data: [
        { 
          title: 'Beautiful place',  
          description: "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. 
                        You understand? 
                        My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. 
                        You understand?", 
          smoking: true, pets: false }
      ]