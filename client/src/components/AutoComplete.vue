<!-- <script setup lang="ts">
import { User, allUsers } from "../models/user";


const { user } = defineProps<{user: User}>();
const users = allUsers()
const list = users.fetchUsers();


</script>


 <template>

        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <o-field label="Find a user">
        <o-autocomplete
                placeholder="Search a user"
                field="title"
           
                check-infinite-scroll
                :debounce-typing="500"
                @typing="users.searchUser"
                @select="option =>  = option"
                @infinite-scroll="users.list"
            >
             <template v-slot-scope="props">
                <div class="media">
                    <div class="media-left">
                    <img width="32" :src="`${$props.user.pic}`" />
                    </div>
                    <div class="media-content">
                    {{ $props.user.firstname}}  {{ $props.user.lastname}}
                </div>
                </div>
                </template>
                <template v-slot="footer">
                <span v-show="!users.list" class="has-text-grey"> Thats it! No more users found. </span>
                </template>
        </o-autocomplete> 
        </o-field>
</template>

<style>

</style> -->