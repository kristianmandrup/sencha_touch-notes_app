Date.dayNames = [
    'Søndag',
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag'
];

Date.monthNames = [
    'Januar',
    'Februar',
    'Marts',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'December'
];

Date.monthNumbers = {
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'Maj': 4,
    'Jun': 5,
    'Jul': 6,
    'Aug': 7,
    'Sep': 8,
    'Okt': 9,
    'Nov': 10,
    'Dec': 11
};


Date.parseCodes.S.s = '(?:ste|nden|dje|te|te|ende|ende|ende)';

if(Ext.Picker){
    Ext.override(Ext.Picker, {
        doneText: 'Done'    
    });
}

if(Ext.DatePicker){
    Ext.override(Ext.DatePicker, {
        'dayText': 'Dag',
        'monthText': 'Måned',
        'yearText': 'År',
        'slotOrder': ['year', 'month', 'day']    
    });
}

if(Ext.IndexBar){
    Ext.override(Ext.IndexBar, {
        'letters': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Æ', 'Ø', 'Å']    
    });
}

if(Ext.NestedList){
    Ext.override(Ext.NestedList, {
        'backText': 'Tilbage',
        'loadingText': 'Loader...',
        'emptyText': 'Ingen elementer.'
    });
}

if(Ext.util.Format){
    Ext.util.Format.defaultDateFormat = 'Y/m/d'; }

if(Ext.MessageBox){
    Ext.MessageBox.OK.text = 'OK';
    Ext.MessageBox.CANCEL.text = 'Cancel';
    Ext.MessageBox.YES.text = 'Yes';
    Ext.MessageBox.NO.text = 'No';
}