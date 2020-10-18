const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    /* INSERIR DADOS NA TABELA */
    /* await saveOrphanage(db, {
        lat: '-27.2194939',
        lng: '-49.6447629',
        name: 'Lar das meninas',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '87 9 9856 8756',
        images: [
            'https://images.unsplash.com/photo-1601180964401-6e474136af83?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1597553954309-30454e8502f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'            
        ].toString(),
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        opening_hours: 'Horário de visitas das 8h ate 18h',
        open_on_weekends: '1'
    }); */

    /* CONSULTAR DADOS NA TABELA */
    const selectedOrphanages = await db.all('SELECT * FROM orphanages');
    console.log(selectedOrphanages);

    //CONSULTAR SOMENTE UM ORFANATO, PELO ID
    /* const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage) */

    /* DELETAR DADO DA TABELA */
    /* console.log(await db.run('DELETE FROM orphanages WHERE id = "1"')); */
})