# Challenge 3 - Git Woes

Now that you have some environment variables and a `.env` file ready to go . . . you remembered to tell Git to ignore that file, right?

If you didn't, now might be a good time to do that! And also change the secret.

Preferably yesterday.

Real talk, though, it's a good idea to have Git ignore any actual credentials in your application.
This way, you can avoid any mishaps with accidentally committing your secrets into a Git repository, where if you put the repository on Github, it'll be there!

Forever!

Irrevocably!

Any time you accidentally commit a secret to Github, assume it's compromised and rotate (change) it accordingly.

**To pass this challenge, you'll need to make sure that the .env file is not tracked by Git whatsoever.**

## Useful Links

[Env File: The Only Guide You'll Need](https://onboardbase.com/blog/env-file-guide/)
[How to Delete a File From Git](https://www.geeksforgeeks.org/how-to-delete-a-file-from-a-git-repository/)
