module.exports = async helper => {
  try {
    const baseUrl = 'https://twilioquest-prod.firebaseapp.com';
    const response = await fetch(`${baseUrl}/quest/tracking/trees`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        analyticsId: helper.analyticsId,
        createdAt: new Date(),
        missionName: 'owl',
        objectiveName: 'owl_plant_tree1',
        playerName: helper.context.settings.name,
      })
    });

    if (response.ok) {
      // 204 indicates success
      helper.success(`
      Merci d'aider à planter un arbre en Australie !
      `);
    } else {
      if (response.status === 403) {
        return helper.success(`
        Vous avez déjà planté cet arbre - tant mieux pour vous !
        `);
      } else {
        return helper.fail(`
        Désolé, un problème est survenu lors de la soumission de votre demande. Réessayez plus tard !
        `);
      }
    }
  } catch (err) {
    console.log(err);
    helper.fail(
      `Quelque chose a mal tourné quand on a essayé de planter un arbre en votre nom :
      <br/></br/>
      ${err}`
    );
  }
};
