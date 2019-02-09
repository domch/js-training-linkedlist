





let playList = new PlayList();



let itirazimVarSarkisi = new Song("Itirazim Var", "Müslüm Gürses", "https://you.tube?w=ndheh38");
let batsinBuDunya = new Song("Batsin Bu Dünya", "Orhan Gencebay", "https://you.tube?w=x4mml1");
let gulumse = new Song("Gülümse", "Sezen Aksu", "https://you.tube?w=A14lz");

playList.addNewSong(itirazimVarSarkisi);
playList.addNewSong(batsinBuDunya);
playList.addNewSong(gulumse);

playList.removeSong(1);


playList.run();