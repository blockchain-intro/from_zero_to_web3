import logging

import json
from web3 import Web3

logger = logging.getLogger(__name__)


class Client(object):
    """
    build client to access infura public node
    """

    def __init__(self, provider: str, address: str, private_key: str, contract_conf: dict):
        """
        :param provider: str
        :param address: str, hex
        :param private_key: test
        :param contract_conf: contract_conf is a dict that contains 'path' and 'address' of contract
        """

        self._logger = logger

        self._provider = provider
        self._web3 = Web3(Web3.HTTPProvider(self._provider))
        assert self._web3.isConnected()

        assert self._web3.isAddress(address)
        self._account = address
        self._private_key = private_key

        assert (contract_conf['path'] is not None) and (contract_conf['address'] is not None)
        self._contract = self.init_contract(contract_conf)

        self._transaction = None

        logger.debug("cur env: account:%s, provider:%s", self._account, self._provider)

    def get_balance(self, unit):
        return self._web3.fromWei(self._web3.eth.get_balance(self._account), unit)

    def init_contract(self, contract_conf):
        with open(contract_conf['path']) as f:
            raw_contract = json.load(f)
        return self._web3.eth.contract(address=contract_conf['address'], abi=raw_contract['abi'])

    def transact(self, transaction):

        assert self._web3.isChecksumAddress(transaction['to'])
        self._transaction = transaction

        signed = self._web3.eth.account.sign_transaction(self._transaction, self._private_key)
        tx = self._web3.eth.send_raw_transaction(signed.rawTransaction)
        return tx

