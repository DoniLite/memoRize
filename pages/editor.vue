<script setup lang="ts">
import { $getRoot, $getSelection, type EditorState } from 'lexical'
import { LexicalComposer, LexicalContentEditable, LexicalHistoryPlugin, LexicalPlainTextPlugin } from 'lexical-vue'
import OnchangePlugin from '~/components/OnchangePlugin.vue';

const editorStateRef = ref()

function onChange(editorState: EditorState) {
    // Call toJSON on the EditorState object, which produces a serialization safe string
    editorStateRef.value = editorState.toJSON()

    // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
    // editorState.value = JSON.stringify(editorStateJSON)
}

const config = {
    namespace: 'MyEditor',
    theme: {
        // Theme styling goes here
    },
    onError(error: any) {
        // Catch any errors that occur during Lexical updates and log them
        // or throw them as needed. If you don't throw them, Lexical will
        // try to recover gracefully without losing user data.
        console.error(error)
    },
}
</script>

<template>
    <LexicalComposer :initial-config="config">
        <LexicalPlainTextPlugin>
            <template #contentEditable>
                <LexicalContentEditable />
            </template>
            <template #placeholder>
                <div>
                    Enter some text...
                </div>
            </template>
        </LexicalPlainTextPlugin>
        <LexicalHistoryPlugin />
        <OnchangePlugin @change="onChange" />
    </LexicalComposer>
</template>