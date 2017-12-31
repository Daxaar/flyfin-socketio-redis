# flyfin-socketio-redis
Realtime web (express) using socketio for Redis pub/sub notifications

Initial PoC to test using Redis pub/sub model for notifying clients of changes received on the FlyFin api.

In it's current very rough state it shows how to wire up socketio to emit messages to all connected clients when a message is published to a subscribed redis channel.
