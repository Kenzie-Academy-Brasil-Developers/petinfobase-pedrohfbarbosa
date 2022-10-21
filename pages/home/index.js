import { posts } from "../../scripts/teste.js";
import { avatarAdd, renderCards } from "../../scripts/card_post.js";
import { renderCreatePost } from "../../scripts/modal_create_post.js";
import { controlModal } from "../../scripts/modal_show_post.js"
import { editModalControl } from "../../scripts/modal_edit_post.js";
import { deleteModalControl } from "../../scripts/modal_delete_post.js";
import { createSpinner } from "../../scripts/spinner.js";
import { toltip } from "../../scripts/toltip.js";


const userNow = {
	username: "Pedro",
	email: "pedro@kenzie.com.br",
	password: "123456",
	avatar: "https://i.pinimg.com/originals/27/87/5d/27875d70cf52a0a643aeda13bbb7b0cd.jpg"
}


avatarAdd(userNow)

renderCards(posts, userNow)

controlModal(posts)

renderCreatePost()

editModalControl(posts)

deleteModalControl(posts)

