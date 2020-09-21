import React from 'react'
import {View} from 'react-native'
import {Typography} from 'harmonium-rn'
import {storiesOf} from '@storybook/react-native'

storiesOf('Typography', module)
  .addDecorator(story => <View style={{padding: 20}}>{story()}</View>)
  .add('h1', () => <Typography variant='h1'>Header 1</Typography>)
  .add('body', () => (
    <Typography>
      Fire ship mutiny yard fluke schooner hands Shiver me timbers six pounders
      keelhaul chantey. Pirate tack handsomely hearties lee scallywag spike haul
      wind Admiral of the Black swing the lead. Marooned Nelsons folly Brethren
      of the Coast spanker draft warp mutiny carouser shrouds topgallant.
    </Typography>
  ))
  .add('bodyLarge', () => (
    <Typography variant='bodyLarge'>
      Chain Shot skysail Corsair holystone loot stern clap of thunder flogging
      driver boatswain. Port Shiver me timbers haul wind Buccaneer crimp driver
      run a rig tackle shrouds yo-ho-ho. Maroon hardtack Brethren of the Coast
      nipper scuppers starboard lad rigging cable jack.
    </Typography>
  ))
  .add('bodySmall', () => (
    <Typography variant='bodySmall'>
      Belaying pin ahoy boom hearties heave to hardtack bowsprit pressgang dance
      the hempen jig draft. Parley belay sheet draft Buccaneer pressgang
      scallywag rigging hempen halter careen. Scourge of the seven seas rope's
      end splice the main brace hang the jib fire ship killick me chase long
      boat case shot.
    </Typography>
  ))
  .add('helpText', () => (
    <Typography variant='helpText'>
      Fore topgallant Sink me provost parley crimp stern plunder take a caulk
      squiffy. Bilge rat rope's end jack splice the main brace gabion careen
      draught chase guns lugger bring a spring upon her cable. Me hogshead Gold
      Road lad booty coffer overhaul grapple careen dead men tell no tales.
    </Typography>
  ))
