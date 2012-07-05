Ext.define	'astroSE.view.AstroDetail'
	extend: 'Ext.DataView'
	xtype: 'astrodetail'
	requires:	[
		'Ext.Video'
	]
	config:
    xtype:'container'
    scrollable: true
    styleHtmlContent: true
    store: 'UrlStore'
    title:'News Feeds'
		itemTpl:[
      '{type}<br/>'
      '{title}<br/>'
      '{description}<br/>'
      '<img src="{src}"/><br/>'
      '{fullBody}<br/>'
      '{strPublishDate}<br/>'
    ]
