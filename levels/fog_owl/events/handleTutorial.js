/**
 * Handle scripting and interaction for the fog owl tutorial. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
async function handleTutorial(event, world, worldState) {
  if (worldState.hasSeenTutorial) {
    return;
  }

  await world.wait(1000);

  world.disablePlayerMovement();
  await world.tweenCameraToPosition({
    x: 528,
    y: 336,
  });
  world.showNotification(`
    <i>
    C'est donc le Fog Owl !<br/><br/>Cette plateforme ressemble au <em>système de navigation</em>. - 
    Je devrais être capable de l'utiliser pour voyager dans différentes parties du Cloud.
    </i>
  `);
  await world.wait(6000);

  await world.tweenCameraToPosition({
    x: 732,
    y: 610,
  });
  world.showNotification(`
    <i>
    Cette zone ressemble à une sorte de simulateur de formation de Réalité Virtuelle.<br/><br/>Je parie qu'il existe
    des simulateurs de formation qui peuvent aider à <em>développer mes compétences techniques</em> !
    </i>
  `);
  await world.wait(6000);

  await world.tweenCameraToPlayer();
  world.showNotification(`
    <i>
    Il est temps de commencer !<br/><br/>Je pourrais aussi dire bonjour à Cédric et à l'équipe.
    </i>
  `);
  world.enablePlayerMovement();

  worldState.hasSeenTutorial = true;
}

module.exports = handleTutorial;
