/**
 * Created by liuwei on 2017/3/1.
 */
ngAdminLTEApp.controller('UserController', function ($scope, Constants, $translate) {
    $scope.resetSidebar('system');

    $translate(['LANGUAGE', 'DATA_TABLES.LANGUAGE_URL']).then(function (transactions) {
        var editor = new $.fn.dataTable.Editor({
            ajax: '/user',
            table: '#user',
            idSrc:  'id',
            fields: [
                { label: "ID", name: 'id' },
                { label: "First name", name: 'firstName' },
                { label: "Last name", name: 'lastName' }
            ],
            i18n: Constants.DataTable.Editor.Language[transactions['LANGUAGE']]

        }).on('open', function (event, main, action) {

        });

        var table = $('#user').DataTable({
            dom: Constants.DataTable.Dom,
            select: {
                style: 'os',
                info: false
            },
            buttons: [
                { extend: 'create', editor: editor, text: transactions['DATA_TABLES.EDITOR_BUTTONS.CREATE'] },
                { extend: 'edit', editor: editor, text: transactions['DATA_TABLES.EDITOR_BUTTONS.EDIT'] },
                { extend: 'remove', editor: editor, text: transactions['DATA_TABLES.EDITOR_BUTTONS.DELETE'] }
            ],
            language: {
                url: transactions['DATA_TABLES.LANGUAGE_URL']
            }
        });
    });
});