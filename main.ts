let ダイヤモンドの数 = 0
player.onChat("go", function () {
    ダイヤモンドの数 = 0
    while (true) {
        agent.move(FORWARD, 1)
        if (agent.inspect(AgentInspection.Block, DOWN) == DIAMOND_BLOCK) {
            ダイヤモンドの数 += 1
            // なぜそんなに死にたいんだなぜだ
            if (ダイヤモンドの数 == 1) {
                agent.turn(LEFT_TURN)
            } else if (ダイヤモンドの数 == 2) {
                agent.turn(LEFT_TURN)
            } else if (ダイヤモンドの数 == 3) {
                agent.turn(RIGHT_TURN)
            } else if (ダイヤモンドの数 == 4) {
                agent.turn(RIGHT_TURN)
            } else if (ダイヤモンドの数 == 5) {
                agent.turn(LEFT_TURN)
            } else if (ダイヤモンドの数 == 6) {
                agent.turn(LEFT_TURN)
            } else if (ダイヤモンドの数 == 7) {
                agent.turn(RIGHT_TURN)
            }
        } else if (agent.inspect(AgentInspection.Block, DOWN) == GOLD_BLOCK) {
            break;
        }
    }
})
player.onChat("come", function () {
    agent.teleportToPlayer()
})
