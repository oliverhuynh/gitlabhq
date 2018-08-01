  const diffDiscussionMock = getJSONFixture(discussionFixture)[0];

      expect(button.dataset.clipboardText).toBe('{"text":"files/ruby/popen.rb","gfm":"`files/ruby/popen.rb`"}');
      it('renders a disabled button when diff has no discussions', () => {
        expect(
          vm.$el.querySelector('.js-btn-vue-toggle-comments').getAttribute('disabled'),
        ).toEqual('disabled');
      });

      describe('with discussions', () => {
        it('dispatches toggleFileDiscussions when user clicks on toggle discussions button', () => {
          const propsCopy = Object.assign({}, props);
          propsCopy.diffFile.submodule = false;
          propsCopy.diffFile.blob = {
            id: '848ed9407c6730ff16edb3dd24485a0eea24292a',
            path: 'lib/base.js',
            name: 'base.js',
            mode: '100644',
            readableText: true,
            icon: 'file-text-o',
          };
          propsCopy.addMergeRequestButtons = true;
          propsCopy.diffFile.deletedFile = true;

          const discussionGetter = () => [diffDiscussionMock];
          notesModule.getters.discussions = discussionGetter;
          vm = mountComponentWithStore(Component, {
            props: propsCopy,
            store: new Vuex.Store({
              modules: {
                diffs: diffsModule,
                notes: notesModule,
              },
            }),
          });

          spyOn(vm, 'toggleFileDiscussions');

          vm.$el.querySelector('.js-btn-vue-toggle-comments').click();

          expect(vm.toggleFileDiscussions).toHaveBeenCalled();
        });