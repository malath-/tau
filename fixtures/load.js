var _ = require('lodash'),
    mongoose = require('mongoose'),
    models = require('../models'),
    application_root = (__dirname + "/../");

mongoose.connect('mongodb://localhost/tau');

var sri = new models.User(),
    vsiao = new models.User(),
    iev = new models.User(),
    drl = new models.User(),
    dsyang = new models.User(),
    testuser = new models.User(),
    hw01 = new models.Assignment(),
    c15122 = new models.Course(),
    pixelate = new models.File(),
    warhol = new models.File(),
    findedges = new models.File(),
    assn09 = new models.Assignment(),
    c15150 = new models.Course(),
    fundict = new models.File(),
    serializable = new models.File(),
    ordered = new models.File(),
    assn07 = new models.Assignment(),
    c15210 = new models.Course(),
    boruvka = new models.File()
    boruvkacomment = new models.Comment(),
    funcomment1 = new models.Comment(),
    funcomment2 = new models.Comment();
sri.name = "James";
sri.password = ".";
sri.email = "srikrish@andrew.cmu.edu";
sri.save(function(e) { if(e) {console.log(e);}});
vsiao.name = "Vincent Siao"
vsiao.password = "j2h3nkj";
vsiao.email = "vsiao@andrew.cmu.edu";
vsiao.save(function(e) { if(e) console.log(e); });
dsyang.name = "Dan Yang"
dsyang.password = "dsyang";
dsyang.email = "dsyang@andrew.cmu.edu";
dsyang.save(function(e) { if(e) console.log(e); });
iev.name = "Ian";
iev.password = "ianleaves";
iev.email = "iev@cs.cmu.edu";
iev.save(function(e) { if(e) {console.log(e);}});
drl.name = "Dr. Dan";
drl.password = "root";
drl.email = "drl@cs.cmu.edu";
drl.save(function(e) { if(e) {console.log(e);}});

c15150.name = "15-150";
c15150.slug = "15-150";
c15150.assignments.push("assn09");
c15150.students.push(vsiao._id);
c15150.staff.push(iev._id);
c15150.students.push(sri._id);
c15150.staff.push(dsyang._id);
c15150.staff.push(drl._id);
c15150.students.push(sri._id);
c15150.save(function(e) { if (e) console.log(e); });

c15210.name = "15-210";
c15210.slug = "15-210";
c15210.assignments.push("assn07");
c15210.students.push(dsyang._id);
c15210.students.push(sri._id);
c15210.students.push(vsiao._id);
c15210.staff.push(iev._id);
c15210.save(function(e) { if (e) console.log(e); });

c15122.name = "15-122";
c15122.slug = "15-122";
c15122.assignments.push("hw01");
c15122.students.push(dsyang._id);
c15122.students.push(vsiao._id);
c15122.staff.push(sri._id);
c15122.staff.push(iev._id);
c15122.save(function(e) { if (e) console.log(e); });

funcomment1.text = "Your style is bad and you should feel bad";
funcomment1.user = sri._id;
funcomment1.timestamp = new Date();
funcomment1.startLine = 34;
funcomment1.endLine = 34;
funcomment1.save(function(e) { if(e) {console.log(e);}});

funcomment2.text = "Very nicely done.";
funcomment2.user = iev._id;
funcomment2.timestamp = new Date();
funcomment2.startLine = 13;
funcomment2.endLine = 20;
funcomment2.save(function(e) { if(e) {console.log(e);}});

pixelate.name = "pixelate.c0";
pixelate.slug = "pixelate.c0";
pixelate.path =
    application_root + "/data/handins/dsyang/15122/hw01/pixelate.c0";
pixelate.save(function(e) {if(e) {console.log(e);}});
fundict.name = "fundict.sml";
fundict.slug = "fundict.sml";
fundict.path =
    application_root + "/data/handins/srikrish/15150/assn09/fundict.sml";
fundict.timestamp = new Date();
fundict.comments.push(funcomment1);
fundict.comments.push(funcomment2);
fundict.save(function(e) { if(e) {console.log(e);}});
ordered.name = "ordered.sml";
ordered.slug = "ordered.sml";
ordered.path =
    application_root + "/data/handins/srikrish/15150/assn09/ordered.sml";
ordered.timestamp = new Date();
ordered.save(function(e) { if(e) {console.log(e);}});
serializable.name = "serializable.sml";
serializable.slug = "serializable.sml";
serializable.path =
    application_root+"/data/handins/srikrish/15150/assn09/serializable.sml";
serializable.timestamp = new Date();
serializable.save(function(e) { if(e) {console.log(e);}});

assn09.name = "Assignment 09";
assn09.slug = "assn09";
assn09.course = c15150._id;
assn09.user = sri._id;
assn09.files.push(fundict._id);
assn09.files.push(ordered._id);
assn09.files.push(serializable._id);
assn09.save(function(e) { if(e) {console.log(e);}});


pixelate.name = "pixelate.c0";
pixelate.slug = "pixelate.c0";
pixelate.path =
    application_root + "/data/handins/dsyang/15122/hw01/pixelate.c0";
pixelate.timestamp = new Date();
pixelate.save(function(e) {if(e) {console.log(e);}});
warhol.name = "warhol.c0";
warhol.slug = "warhol.c0";
warhol.path =
    application_root + "/data/handins/dsyang/15122/hw01/warhol.c0";
warhol.timestamp = new Date();
warhol.save(function(e) {if(e) {console.log(e);}});
findedges.name = "findedges.c0";
findedges.slug = "findedges.c0";
findedges.path =
    application_root + "/data/handins/dsyang/15122/hw01/findedges.c0";
findedges.timestamp = new Date();
findedges.save(function(e) {if(e) {console.log(e);}});


hw01.name = "Homework 01";
hw01.slug = "hw01";
hw01.course = c15122._id;
hw01.user = dsyang._id;
hw01.files.push(pixelate._id);
hw01.files.push(warhol._id);
hw01.files.push(findedges._id);
hw01.save(function(e) { if(e) {console.log(e);}});

boruvkacomment.text = "Explain more!";
boruvkacomment.user = dsyang._id;
boruvkacomment.timestamp = new Date();
boruvkacomment.startLine = 37;
boruvkacomment.endLine = 39;
boruvkacomment.save(function(e) { if(e) {console.log(e);}});

boruvka.name = "BoruvkaMST.sml";
boruvka.slug = "BoruvkaMST.sml";
boruvka.path =
  application_root + "/data/handins/vsiao/15210/assn07/BoruvkaMST.sml";
boruvka.timestamp = new Date();
boruvka.comments.push(boruvkacomment);
boruvka.save(function(e) { if (e) console.log(e); });
assn07.name = "Assignment 07";
assn07.slug = "assn07";
assn07.course = c15210._id;
assn07.user = vsiao._id;
assn07.files.push(boruvka._id);
assn07.save(function(e) { if (e) console.log(e); });
vsiao.assignments.push(assn07._id);
vsiao.save(function(e) { if (e) console.log(e); });

sri.assignments.push(assn09._id);
sri.save(function(e) { if(e) {console.log(e);}});

dsyang.assignments.push(hw01._id);
dsyang.save(function(e) {if(e) {console.log(e);}});

